
        function loadChatPluginScript() {
            var script = document.createElement('script');
            script.src = 'https://app.aminos.ai/js/chat_plugin.js'; 
            script.setAttribute('data-bot-id', '15504'); 
            document.body.appendChild(script);
        }

        // Load the script when the webpage is loaded
        window.onload = loadChatPluginScript;
