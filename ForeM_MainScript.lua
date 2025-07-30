-- ForeM Launcher - Script Principal
-- À placer dans ServerScriptService

local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local TeleportService = game:GetService("TeleportService")
local UserService = game:GetService("UserService")
local HttpService = game:GetService("HttpService")
local DataStoreService = game:GetService("DataStoreService")

-- DataStore pour sauvegarder les données utilisateur
local PlayerDataStore = DataStoreService:GetDataStore("ForeM_PlayerData")

-- Événements RemoteEvent
local remoteEvents = Instance.new("Folder")
remoteEvents.Name = "ForeM_RemoteEvents"
remoteEvents.Parent = ReplicatedStorage

local loginEvent = Instance.new("RemoteEvent")
loginEvent.Name = "LoginEvent"
loginEvent.Parent = remoteEvents

local joinServerEvent = Instance.new("RemoteEvent")
joinServerEvent.Name = "JoinServerEvent"
joinServerEvent.Parent = remoteEvents

local updateProfileEvent = Instance.new("RemoteEvent")
updateProfileEvent.Name = "UpdateProfileEvent"
updateProfileEvent.Parent = remoteEvents

local getServersEvent = Instance.new("RemoteFunction")
getServersEvent.Name = "GetServersEvent"
getServersEvent.Parent = remoteEvents

-- Configuration des serveurs disponibles
local AVAILABLE_SERVERS = {
    {
        id = "redside_rp_v5",
        name = "REDSIDE RP V5",
        description = "RP Sérieux → Contenu exclusif",
        gameId = 606849621, -- ID du jeu Roblox
        players = 728,
        maxPlayers = 1450,
        creator = "RedSide Team",
        tags = {"roleplay", "esx", "rp", "police"},
        featured = true,
        country = "🇫🇷",
        icon = "rbxassetid://YOUR_ICON_ID_HERE"
    },
    {
        id = "dynasty_rp",
        name = "Dynasty RP",
        description = "RETOUR DE LA V1 → FreeAccess → RP Fun",
        gameId = 920587237,
        players = 197,
        maxPlayers = 1200,
        creator = "Dynasty Team",
        tags = {"roleplay", "rp", "police", "vrp"},
        featured = false,
        country = "🇫🇷",
        icon = "rbxassetid://YOUR_ICON_ID_HERE"
    },
    {
        id = "revolution_rp",
        name = "RevolutionRP",
        description = "FREE→ACCESS → Optimisé → Staff actif",
        gameId = 155615604,
        players = 263,
        maxPlayers = 2048,
        creator = "Revolution Team",
        tags = {"roleplay", "esx", "rp", "police"},
        featured = false,
        country = "🇫🇷",
        icon = "rbxassetid://YOUR_ICON_ID_HERE"
    }
}

-- Fonction pour obtenir les données du joueur
local function getPlayerData(player)
    local success, data = pcall(function()
        return PlayerDataStore:GetAsync(player.UserId)
    end)
    
    if success and data then
        return data
    else
        -- Données par défaut
        return {
            displayName = player.DisplayName,
            username = player.Name,
            avatar = "https://www.roblox.com/headshot-thumbnail/image?userId=" .. player.UserId .. "&width=150&height=150&format=png",
            playTime = 0,
            favoriteGames = {},
            level = "Débutant",
            lastPlayed = nil
        }
    end
end

-- Fonction pour sauvegarder les données du joueur
local function savePlayerData(player, data)
    pcall(function()
        PlayerDataStore:SetAsync(player.UserId, data)
    end)
end

-- Gestion de la connexion des joueurs
Players.PlayerAdded:Connect(function(player)
    local playerData = getPlayerData(player)
    
    -- Envoyer les données au client
    loginEvent:FireClient(player, {
        success = true,
        userData = playerData,
        servers = AVAILABLE_SERVERS
    })
end)

-- Gestion de la déconnexion
Players.PlayerRemoving:Connect(function(player)
    -- Sauvegarder les données avant la déconnexion
    local playerData = getPlayerData(player)
    savePlayerData(player, playerData)
end)

-- Fonction pour rejoindre un serveur
joinServerEvent.OnServerEvent:Connect(function(player, serverId)
    for _, server in pairs(AVAILABLE_SERVERS) do
        if server.id == serverId then
            -- Téléporter le joueur vers le jeu
            local success, errorMessage = pcall(function()
                TeleportService:Teleport(server.gameId, player)
            end)
            
            if success then
                print("Joueur " .. player.Name .. " téléporté vers " .. server.name)
                
                -- Mettre à jour les données du joueur
                local playerData = getPlayerData(player)
                playerData.lastPlayed = {
                    gameId = server.gameId,
                    gameName = server.name,
                    timestamp = os.time()
                }
                savePlayerData(player, playerData)
            else
                warn("Erreur lors de la téléportation: " .. errorMessage)
            end
            break
        end
    end
end)

-- Fonction pour obtenir la liste des serveurs
getServersEvent.OnServerInvoke = function(player)
    return AVAILABLE_SERVERS
end

-- Mise à jour du profil
updateProfileEvent.OnServerEvent:Connect(function(player, newData)
    local playerData = getPlayerData(player)
    
    -- Mettre à jour les données autorisées
    if newData.displayName then
        playerData.displayName = newData.displayName
    end
    
    savePlayerData(player, playerData)
    
    -- Confirmer la mise à jour au client
    updateProfileEvent:FireClient(player, {success = true, data = playerData})
end)

print("ForeM Launcher - Système serveur initialisé !")