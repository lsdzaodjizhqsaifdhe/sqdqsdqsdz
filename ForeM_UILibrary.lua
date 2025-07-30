-- ForeM UI Library - Bibliothèque d'éléments UI réutilisables
-- Module à placer dans ReplicatedStorage

local TweenService = game:GetService("TweenService")
local SoundService = game:GetService("SoundService")

local UILibrary = {}

-- Configuration des couleurs du thème
UILibrary.Colors = {
    Primary = Color3.fromRGB(220, 38, 38),
    PrimaryHover = Color3.fromRGB(185, 28, 28),
    Secondary = Color3.fromRGB(31, 41, 55),
    Background = Color3.fromRGB(17, 24, 39),
    Surface = Color3.fromRGB(55, 65, 81),
    Text = Color3.fromRGB(255, 255, 255),
    TextSecondary = Color3.fromRGB(156, 163, 175),
    Success = Color3.fromRGB(34, 197, 94),
    Warning = Color3.fromRGB(251, 191, 36),
    Error = Color3.fromRGB(239, 68, 68)
}

-- Sons par défaut
UILibrary.Sounds = {
    Click = "rbxassetid://131961136",
    Hover = "rbxassetid://131961136",
    Success = "rbxassetid://131961136",
    Error = "rbxassetid://131961136"
}

-- Fonction utilitaire pour créer des éléments
function UILibrary.createElement(className, properties, parent)
    local element = Instance.new(className)
    for property, value in pairs(properties) do
        if property == "CornerRadius" then
            local corner = Instance.new("UICorner")
            corner.CornerRadius = value
            corner.Parent = element
        else
            element[property] = value
        end
    end
    if parent then
        element.Parent = parent
    end
    return element
end

-- Créer un bouton avec animations
function UILibrary.createButton(properties, parent, onClick)
    local defaultProps = {
        BackgroundColor3 = UILibrary.Colors.Primary,
        TextColor3 = UILibrary.Colors.Text,
        BorderSizePixel = 0,
        Font = Enum.Font.GothamBold,
        TextScaled = true
    }
    
    -- Fusionner les propriétés
    for key, value in pairs(defaultProps) do
        if not properties[key] then
            properties[key] = value
        end
    end
    
    local button = UILibrary.createElement("TextButton", properties, parent)
    
    -- Ajouter les coins arrondis
    local corner = Instance.new("UICorner")
    corner.CornerRadius = UDim.new(0, 8)
    corner.Parent = button
    
    -- Effets sonores
    local clickSound = Instance.new("Sound")
    clickSound.SoundId = UILibrary.Sounds.Click
    clickSound.Volume = 0.5
    clickSound.Parent = SoundService
    
    local hoverSound = Instance.new("Sound")
    hoverSound.SoundId = UILibrary.Sounds.Hover
    hoverSound.Volume = 0.2
    hoverSound.Parent = SoundService
    
    -- Animations
    button.MouseEnter:Connect(function()
        hoverSound:Play()
        local tween = TweenService:Create(button, TweenInfo.new(0.2, Enum.EasingStyle.Quad), {
            BackgroundColor3 = UILibrary.Colors.PrimaryHover,
            Size = UDim2.new(button.Size.X.Scale * 1.05, button.Size.X.Offset, button.Size.Y.Scale * 1.05, button.Size.Y.Offset)
        })
        tween:Play()
    end)
    
    button.MouseLeave:Connect(function()
        local tween = TweenService:Create(button, TweenInfo.new(0.2, Enum.EasingStyle.Quad), {
            BackgroundColor3 = UILibrary.Colors.Primary,
            Size = UDim2.new(button.Size.X.Scale / 1.05, button.Size.X.Offset, button.Size.Y.Scale / 1.05, button.Size.Y.Offset)
        })
        tween:Play()
    end)
    
    button.MouseButton1Click:Connect(function()
        clickSound:Play()
        
        -- Animation de clic
        local clickTween = TweenService:Create(button, TweenInfo.new(0.1, Enum.EasingStyle.Quad), {
            Size = UDim2.new(button.Size.X.Scale * 0.95, button.Size.X.Offset, button.Size.Y.Scale * 0.95, button.Size.Y.Offset)
        })
        clickTween:Play()
        
        clickTween.Completed:Connect(function()
            local returnTween = TweenService:Create(button, TweenInfo.new(0.1, Enum.EasingStyle.Quad), {
                Size = UDim2.new(button.Size.X.Scale / 0.95, button.Size.X.Offset, button.Size.Y.Scale / 0.95, button.Size.Y.Offset)
            })
            returnTween:Play()
        end)
        
        if onClick then
            onClick()
        end
    end)
    
    return button
end

-- Créer une carte (card) avec ombre
function UILibrary.createCard(properties, parent)
    local defaultProps = {
        BackgroundColor3 = UILibrary.Colors.Secondary,
        BorderSizePixel = 0
    }
    
    for key, value in pairs(defaultProps) do
        if not properties[key] then
            properties[key] = value
        end
    end
    
    local card = UILibrary.createElement("Frame", properties, parent)
    
    -- Coins arrondis
    local corner = Instance.new("UICorner")
    corner.CornerRadius = UDim.new(0, 12)
    corner.Parent = card
    
    -- Effet d'ombre (simulé avec un gradient)
    local shadow = Instance.new("UIGradient")
    shadow.Color = ColorSequence.new{
        ColorSequenceKeypoint.new(0, Color3.fromRGB(0, 0, 0)),
        ColorSequenceKeypoint.new(1, properties.BackgroundColor3 or UILibrary.Colors.Secondary)
    }
    shadow.Transparency = NumberSequence.new{
        NumberSequenceKeypoint.new(0, 0.8),
        NumberSequenceKeypoint.new(1, 0)
    }
    shadow.Parent = card
    
    return card
end

-- Créer un champ de texte stylisé
function UILibrary.createTextBox(properties, parent, onChanged)
    local defaultProps = {
        BackgroundColor3 = UILibrary.Colors.Surface,
        TextColor3 = UILibrary.Colors.Text,
        PlaceholderColor3 = UILibrary.Colors.TextSecondary,
        BorderColor3 = UILibrary.Colors.Primary,
        BorderSizePixel = 2,
        Font = Enum.Font.Gotham,
        TextScaled = true
    }
    
    for key, value in pairs(defaultProps) do
        if not properties[key] then
            properties[key] = value
        end
    end
    
    local textBox = UILibrary.createElement("TextBox", properties, parent)
    
    -- Coins arrondis
    local corner = Instance.new("UICorner")
    corner.CornerRadius = UDim.new(0, 8)
    corner.Parent = textBox
    
    -- Animations de focus
    textBox.Focused:Connect(function()
        local tween = TweenService:Create(textBox, TweenInfo.new(0.2), {
            BorderColor3 = UILibrary.Colors.Primary,
            BackgroundColor3 = Color3.fromRGB(75, 85, 99)
        })
        tween:Play()
    end)
    
    textBox.FocusLost:Connect(function()
        local tween = TweenService:Create(textBox, TweenInfo.new(0.2), {
            BorderColor3 = UILibrary.Colors.Surface,
            BackgroundColor3 = UILibrary.Colors.Surface
        })
        tween:Play()
    end)
    
    if onChanged then
        textBox.Changed:Connect(onChanged)
    end
    
    return textBox
end

-- Créer une notification toast
function UILibrary.showNotification(message, type, duration)
    local Players = game:GetService("Players")
    local player = Players.LocalPlayer
    local playerGui = player:WaitForChild("PlayerGui")
    
    type = type or "info"
    duration = duration or 3
    
    local colors = {
        success = UILibrary.Colors.Success,
        warning = UILibrary.Colors.Warning,
        error = UILibrary.Colors.Error,
        info = UILibrary.Colors.Primary
    }
    
    -- Créer la notification
    local notification = UILibrary.createElement("Frame", {
        Name = "Notification",
        Size = UDim2.new(0, 300, 0, 60),
        Position = UDim2.new(1, -320, 0, 20),
        BackgroundColor3 = colors[type] or UILibrary.Colors.Primary,
        BorderSizePixel = 0,
        ZIndex = 1000
    }, playerGui)
    
    -- Coins arrondis
    local corner = Instance.new("UICorner")
    corner.CornerRadius = UDim.new(0, 8)
    corner.Parent = notification
    
    -- Texte de la notification
    local text = UILibrary.createElement("TextLabel", {
        Size = UDim2.new(1, -20, 1, 0),
        Position = UDim2.new(0, 10, 0, 0),
        BackgroundTransparency = 1,
        Text = message,
        TextColor3 = UILibrary.Colors.Text,
        TextScaled = true,
        Font = Enum.Font.Gotham,
        TextWrapped = true
    }, notification)
    
    -- Animation d'entrée
    local enterTween = TweenService:Create(notification, TweenInfo.new(0.3, Enum.EasingStyle.Back), {
        Position = UDim2.new(1, -320, 0, 20)
    })
    enterTween:Play()
    
    -- Animation de sortie après le délai
    wait(duration)
    local exitTween = TweenService:Create(notification, TweenInfo.new(0.3, Enum.EasingStyle.Back), {
        Position = UDim2.new(1, 0, 0, 20)
    })
    exitTween:Play()
    
    exitTween.Completed:Connect(function()
        notification:Destroy()
    end)
end

-- Créer un modal/popup
function UILibrary.createModal(title, content, buttons, parent)
    local modal = UILibrary.createElement("Frame", {
        Name = "Modal",
        Size = UDim2.new(1, 0, 1, 0),
        Position = UDim2.new(0, 0, 0, 0),
        BackgroundColor3 = Color3.fromRGB(0, 0, 0),
        BackgroundTransparency = 0.5,
        ZIndex = 999
    }, parent)
    
    local modalContent = UILibrary.createCard({
        Name = "ModalContent",
        Size = UDim2.new(0, 400, 0, 300),
        Position = UDim2.new(0.5, -200, 0.5, -150),
        ZIndex = 1000
    }, modal)
    
    -- Titre
    local titleLabel = UILibrary.createElement("TextLabel", {
        Name = "Title",
        Size = UDim2.new(1, -20, 0, 40),
        Position = UDim2.new(0, 10, 0, 10),
        BackgroundTransparency = 1,
        Text = title,
        TextColor3 = UILibrary.Colors.Text,
        TextScaled = true,
        Font = Enum.Font.GothamBold,
        ZIndex = 1001
    }, modalContent)
    
    -- Contenu
    local contentLabel = UILibrary.createElement("TextLabel", {
        Name = "Content",
        Size = UDim2.new(1, -20, 1, -100),
        Position = UDim2.new(0, 10, 0, 60),
        BackgroundTransparency = 1,
        Text = content,
        TextColor3 = UILibrary.Colors.TextSecondary,
        TextScaled = true,
        Font = Enum.Font.Gotham,
        TextWrapped = true,
        ZIndex = 1001
    }, modalContent)
    
    -- Boutons
    if buttons then
        for i, button in ipairs(buttons) do
            UILibrary.createButton({
                Name = "Button" .. i,
                Size = UDim2.new(0, 80, 0, 30),
                Position = UDim2.new(1, -90 * i, 1, -40),
                Text = button.text,
                ZIndex = 1001
            }, modalContent, function()
                if button.onClick then
                    button.onClick()
                end
                modal:Destroy()
            end)
        end
    end
    
    -- Animation d'apparition
    modalContent.Size = UDim2.new(0, 0, 0, 0)
    local appearTween = TweenService:Create(modalContent, TweenInfo.new(0.3, Enum.EasingStyle.Back), {
        Size = UDim2.new(0, 400, 0, 300)
    })
    appearTween:Play()
    
    return modal
end

return UILibrary