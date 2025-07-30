-- ForeM Launcher - Script Client
-- À placer dans StarterPlayerScripts

local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local TweenService = game:GetService("TweenService")
local UserInputService = game:GetService("UserInputService")
local SoundService = game:GetService("SoundService")

local player = Players.LocalPlayer
local playerGui = player:WaitForChild("PlayerGui")

-- Attendre les RemoteEvents
local remoteEvents = ReplicatedStorage:WaitForChild("ForeM_RemoteEvents")
local loginEvent = remoteEvents:WaitForChild("LoginEvent")
local joinServerEvent = remoteEvents:WaitForChild("JoinServerEvent")
local updateProfileEvent = remoteEvents:WaitForChild("UpdateProfileEvent")
local getServersEvent = remoteEvents:WaitForChild("GetServersEvent")

-- Variables globales
local currentSection = "home"
local isDarkTheme = true
local userData = nil
local serversData = {}
local searchTerm = ""
local selectedFilter = "all"

-- Sons
local clickSound = Instance.new("Sound")
clickSound.SoundId = "rbxassetid://131961136" -- Son de clic
clickSound.Volume = 0.5
clickSound.Parent = SoundService

local hoverSound = Instance.new("Sound")
hoverSound.SoundId = "rbxassetid://131961136" -- Son de survol
hoverSound.Volume = 0.2
hoverSound.Parent = SoundService

-- Fonction utilitaire pour créer des éléments UI
local function createElement(className, properties, parent)
    local element = Instance.new(className)
    for property, value in pairs(properties) do
        element[property] = value
    end
    if parent then
        element.Parent = parent
    end
    return element
end

-- Fonction pour créer un bouton avec effets
local function createButton(properties, parent, onClick)
    local button = createElement("TextButton", properties, parent)
    
    -- Effets de survol
    button.MouseEnter:Connect(function()
        hoverSound:Play()
        local tween = TweenService:Create(button, TweenInfo.new(0.2), {
            BackgroundColor3 = Color3.fromRGB(220, 38, 38)
        })
        tween:Play()
    end)
    
    button.MouseLeave:Connect(function()
        local tween = TweenService:Create(button, TweenInfo.new(0.2), {
            BackgroundColor3 = Color3.fromRGB(185, 28, 28)
        })
        tween:Play()
    end)
    
    if onClick then
        button.MouseButton1Click:Connect(function()
            clickSound:Play()
            onClick()
        end)
    end
    
    return button
end

-- Création de l'interface principale
local function createMainUI()
    -- ScreenGui principal
    local screenGui = createElement("ScreenGui", {
        Name = "ForeM_Launcher",
        ResetOnSpawn = false,
        ZIndexBehavior = Enum.ZIndexBehavior.Sibling
    }, playerGui)
    
    -- Frame principal avec fond sombre
    local mainFrame = createElement("Frame", {
        Name = "MainFrame",
        Size = UDim2.new(1, 0, 1, 0),
        Position = UDim2.new(0, 0, 0, 0),
        BackgroundColor3 = Color3.fromRGB(17, 24, 39),
        BorderSizePixel = 0
    }, screenGui)
    
    -- Header
    local header = createElement("Frame", {
        Name = "Header",
        Size = UDim2.new(1, 0, 0, 60),
        Position = UDim2.new(0, 0, 0, 0),
        BackgroundColor3 = Color3.fromRGB(31, 41, 55),
        BorderSizePixel = 0
    }, mainFrame)
    
    -- Logo ForeM
    local logo = createElement("ImageLabel", {
        Name = "Logo",
        Size = UDim2.new(0, 32, 0, 32),
        Position = UDim2.new(0, 20, 0.5, -16),
        BackgroundTransparency = 1,
        Image = "rbxassetid://YOUR_LOGO_ASSET_ID", -- Remplacez par votre asset ID
        ScaleType = Enum.ScaleType.Fit
    }, header)
    
    -- Titre ForeM
    local title = createElement("TextLabel", {
        Name = "Title",
        Size = UDim2.new(0, 100, 1, 0),
        Position = UDim2.new(0, 60, 0, 0),
        BackgroundTransparency = 1,
        Text = "ForeM",
        TextColor3 = Color3.fromRGB(255, 255, 255),
        TextScaled = true,
        Font = Enum.Font.GothamBold
    }, header)
    
    -- Navigation
    local navFrame = createElement("Frame", {
        Name = "Navigation",
        Size = UDim2.new(0, 400, 0, 40),
        Position = UDim2.new(0.5, -200, 0.5, -20),
        BackgroundTransparency = 1
    }, header)
    
    local navButtons = {
        {id = "home", text = "Accueil"},
        {id = "servers", text = "Serveurs"},
        {id = "news", text = "Actualités"},
        {id = "community", text = "Communauté"}
    }
    
    for i, nav in ipairs(navButtons) do
        local navButton = createButton({
            Name = nav.id .. "Button",
            Size = UDim2.new(0, 90, 1, 0),
            Position = UDim2.new(0, (i-1) * 100, 0, 0),
            BackgroundColor3 = currentSection == nav.id and Color3.fromRGB(220, 38, 38) or Color3.fromRGB(75, 85, 99),
            Text = nav.text,
            TextColor3 = Color3.fromRGB(255, 255, 255),
            TextScaled = true,
            Font = Enum.Font.Gotham,
            BorderSizePixel = 0
        }, navFrame, function()
            switchSection(nav.id)
        end)
    end
    
    -- Profil utilisateur
    local profileFrame = createElement("Frame", {
        Name = "ProfileFrame",
        Size = UDim2.new(0, 200, 0, 40),
        Position = UDim2.new(1, -220, 0.5, -20),
        BackgroundTransparency = 1
    }, header)
    
    -- Avatar du joueur
    local avatar = createElement("ImageLabel", {
        Name = "Avatar",
        Size = UDim2.new(0, 32, 0, 32),
        Position = UDim2.new(0, 0, 0.5, -16),
        BackgroundTransparency = 1,
        Image = "https://www.roblox.com/headshot-thumbnail/image?userId=" .. player.UserId .. "&width=150&height=150&format=png",
        CornerRadius = UDim.new(0.5, 0)
    }, profileFrame)
    
    -- Nom du joueur
    local playerName = createElement("TextLabel", {
        Name = "PlayerName",
        Size = UDim2.new(0, 150, 1, 0),
        Position = UDim2.new(0, 40, 0, 0),
        BackgroundTransparency = 1,
        Text = player.DisplayName,
        TextColor3 = Color3.fromRGB(255, 255, 255),
        TextScaled = true,
        Font = Enum.Font.Gotham,
        TextXAlignment = Enum.TextXAlignment.Left
    }, profileFrame)
    
    -- Zone de contenu principal
    local contentFrame = createElement("Frame", {
        Name = "ContentFrame",
        Size = UDim2.new(1, 0, 1, -60),
        Position = UDim2.new(0, 0, 0, 60),
        BackgroundColor3 = Color3.fromRGB(17, 24, 39),
        BorderSizePixel = 0
    }, mainFrame)
    
    return screenGui, contentFrame
end

-- Fonction pour créer la section serveurs
local function createServersSection(parent)
    local serversFrame = createElement("Frame", {
        Name = "ServersSection",
        Size = UDim2.new(1, 0, 1, 0),
        BackgroundTransparency = 1
    }, parent)
    
    -- Header de recherche
    local searchFrame = createElement("Frame", {
        Name = "SearchFrame",
        Size = UDim2.new(1, -40, 0, 80),
        Position = UDim2.new(0, 20, 0, 20),
        BackgroundColor3 = Color3.fromRGB(31, 41, 55),
        BorderSizePixel = 0
    }, serversFrame)
    
    -- Barre de recherche
    local searchBox = createElement("TextBox", {
        Name = "SearchBox",
        Size = UDim2.new(1, -40, 0, 40),
        Position = UDim2.new(0, 20, 0, 20),
        BackgroundColor3 = Color3.fromRGB(55, 65, 81),
        BorderColor3 = Color3.fromRGB(220, 38, 38),
        BorderSizePixel = 2,
        Text = "",
        PlaceholderText = "Rechercher un serveur...",
        TextColor3 = Color3.fromRGB(255, 255, 255),
        PlaceholderColor3 = Color3.fromRGB(156, 163, 175),
        TextScaled = true,
        Font = Enum.Font.Gotham
    }, searchFrame)
    
    -- Liste des serveurs
    local serversList = createElement("ScrollingFrame", {
        Name = "ServersList",
        Size = UDim2.new(0.7, 0, 1, -120),
        Position = UDim2.new(0, 20, 0, 120),
        BackgroundTransparency = 1,
        ScrollBarThickness = 8,
        ScrollBarImageColor3 = Color3.fromRGB(220, 38, 38)
    }, serversFrame)
    
    -- Sidebar des serveurs populaires
    local sidebar = createElement("Frame", {
        Name = "Sidebar",
        Size = UDim2.new(0.28, 0, 1, -120),
        Position = UDim2.new(0.72, 0, 0, 120),
        BackgroundColor3 = Color3.fromRGB(31, 41, 55),
        BorderSizePixel = 0
    }, serversFrame)
    
    local sidebarTitle = createElement("TextLabel", {
        Name = "SidebarTitle",
        Size = UDim2.new(1, -20, 0, 40),
        Position = UDim2.new(0, 10, 0, 10),
        BackgroundTransparency = 1,
        Text = "🌟 Serveurs populaires",
        TextColor3 = Color3.fromRGB(255, 255, 255),
        TextScaled = true,
        Font = Enum.Font.GothamBold,
        TextXAlignment = Enum.TextXAlignment.Left
    }, sidebar)
    
    return serversFrame, serversList, sidebar
end

-- Fonction pour créer un élément serveur
local function createServerItem(serverData, parent, yPosition)
    local serverFrame = createElement("Frame", {
        Name = "Server_" .. serverData.id,
        Size = UDim2.new(1, -10, 0, 50),
        Position = UDim2.new(0, 5, 0, yPosition),
        BackgroundColor3 = Color3.fromRGB(31, 41, 55),
        BorderSizePixel = 0
    }, parent)
    
    -- Icône du serveur
    local serverIcon = createElement("ImageLabel", {
        Name = "ServerIcon",
        Size = UDim2.new(0, 40, 0, 40),
        Position = UDim2.new(0, 5, 0.5, -20),
        BackgroundColor3 = Color3.fromRGB(220, 38, 38),
        Image = serverData.icon or "",
        ScaleType = Enum.ScaleType.Fit
    }, serverFrame)
    
    -- Nom du serveur
    local serverName = createElement("TextLabel", {
        Name = "ServerName",
        Size = UDim2.new(0, 200, 0, 20),
        Position = UDim2.new(0, 55, 0, 5),
        BackgroundTransparency = 1,
        Text = serverData.name,
        TextColor3 = Color3.fromRGB(255, 255, 255),
        TextScaled = true,
        Font = Enum.Font.GothamBold,
        TextXAlignment = Enum.TextXAlignment.Left
    }, serverFrame)
    
    -- Description
    local serverDesc = createElement("TextLabel", {
        Name = "ServerDesc",
        Size = UDim2.new(0, 200, 0, 15),
        Position = UDim2.new(0, 55, 0, 25),
        BackgroundTransparency = 1,
        Text = serverData.description,
        TextColor3 = Color3.fromRGB(156, 163, 175),
        TextScaled = true,
        Font = Enum.Font.Gotham,
        TextXAlignment = Enum.TextXAlignment.Left
    }, serverFrame)
    
    -- Tags
    local tagsFrame = createElement("Frame", {
        Name = "TagsFrame",
        Size = UDim2.new(0, 200, 0, 20),
        Position = UDim2.new(0, 270, 0.5, -10),
        BackgroundTransparency = 1
    }, serverFrame)
    
    for i, tag in ipairs(serverData.tags) do
        if i <= 4 then
            local tagLabel = createElement("TextLabel", {
                Name = "Tag" .. i,
                Size = UDim2.new(0, 50, 1, 0),
                Position = UDim2.new(0, (i-1) * 52, 0, 0),
                BackgroundColor3 = Color3.fromRGB(55, 65, 81),
                Text = tag,
                TextColor3 = Color3.fromRGB(209, 213, 219),
                TextScaled = true,
                Font = Enum.Font.Gotham,
                BorderSizePixel = 0
            }, tagsFrame)
        end
    end
    
    -- Indicateur pays
    local countryFlag = createElement("TextLabel", {
        Name = "CountryFlag",
        Size = UDim2.new(0, 30, 0, 20),
        Position = UDim2.new(0, 480, 0.5, -10),
        BackgroundTransparency = 1,
        Text = serverData.country,
        TextScaled = true,
        Font = Enum.Font.Gotham
    }, serverFrame)
    
    -- Compteur de joueurs
    local playerCount = createElement("TextLabel", {
        Name = "PlayerCount",
        Size = UDim2.new(0, 80, 0, 20),
        Position = UDim2.new(0, 520, 0.5, -10),
        BackgroundTransparency = 1,
        Text = serverData.players .. " / " .. serverData.maxPlayers,
        TextColor3 = Color3.fromRGB(255, 255, 255),
        TextScaled = true,
        Font = Enum.Font.GothamBold,
        TextXAlignment = Enum.TextXAlignment.Right
    }, serverFrame)
    
    -- Bouton rejoindre
    local joinButton = createButton({
        Name = "JoinButton",
        Size = UDim2.new(0, 80, 0, 30),
        Position = UDim2.new(1, -90, 0.5, -15),
        BackgroundColor3 = Color3.fromRGB(185, 28, 28),
        Text = "Rejoindre",
        TextColor3 = Color3.fromRGB(255, 255, 255),
        TextScaled = true,
        Font = Enum.Font.GothamBold,
        BorderSizePixel = 0
    }, serverFrame, function()
        joinServerEvent:FireServer(serverData.id)
    end)
    
    -- Effet de survol sur le frame entier
    serverFrame.MouseEnter:Connect(function()
        local tween = TweenService:Create(serverFrame, TweenInfo.new(0.2), {
            BackgroundColor3 = Color3.fromRGB(55, 65, 81)
        })
        tween:Play()
    end)
    
    serverFrame.MouseLeave:Connect(function()
        local tween = TweenService:Create(serverFrame, TweenInfo.new(0.2), {
            BackgroundColor3 = Color3.fromRGB(31, 41, 55)
        })
        tween:Play()
    end)
end

-- Fonction pour mettre à jour la liste des serveurs
local function updateServersList(serversList)
    -- Nettoyer la liste existante
    for _, child in pairs(serversList:GetChildren()) do
        if child.Name:find("Server_") then
            child:Destroy()
        end
    end
    
    -- Filtrer les serveurs
    local filteredServers = {}
    for _, server in pairs(serversData) do
        local matchesSearch = searchTerm == "" or 
            string.find(string.lower(server.name), string.lower(searchTerm)) or
            string.find(string.lower(server.description), string.lower(searchTerm))
        
        local matchesFilter = selectedFilter == "all"
        if not matchesFilter then
            for _, tag in pairs(server.tags) do
                if tag == selectedFilter then
                    matchesFilter = true
                    break
                end
            end
        end
        
        if matchesSearch and matchesFilter then
            table.insert(filteredServers, server)
        end
    end
    
    -- Créer les éléments serveur
    for i, server in ipairs(filteredServers) do
        createServerItem(server, serversList, (i-1) * 55)
    end
    
    -- Mettre à jour la taille du contenu
    serversList.CanvasSize = UDim2.new(0, 0, 0, #filteredServers * 55)
end

-- Fonction pour changer de section
function switchSection(sectionId)
    currentSection = sectionId
    -- Ici vous pouvez ajouter la logique pour changer l'affichage
    print("Changement vers la section: " .. sectionId)
end

-- Initialisation de l'interface
local function initializeUI()
    local screenGui, contentFrame = createMainUI()
    local serversSection, serversList, sidebar = createServersSection(contentFrame)
    
    -- Gestion de la recherche
    local searchBox = serversSection.SearchFrame.SearchBox
    searchBox.Changed:Connect(function(property)
        if property == "Text" then
            searchTerm = searchBox.Text
            updateServersList(serversList)
        end
    end)
    
    -- Mettre à jour la liste initiale
    updateServersList(serversList)
end

-- Gestion des événements du serveur
loginEvent.OnClientEvent:Connect(function(data)
    if data.success then
        userData = data.userData
        serversData = data.servers
        
        -- Initialiser l'interface une fois connecté
        initializeUI()
        
        print("Connexion réussie ! Bienvenue " .. userData.displayName)
    end
end)

updateProfileEvent.OnClientEvent:Connect(function(data)
    if data.success then
        userData = data.data
        print("Profil mis à jour avec succès !")
    end
end)

print("ForeM Launcher - Client initialisé !")