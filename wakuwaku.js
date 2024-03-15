<script>
        // Function to dynamically load the external script without exposing the source URL
        function loadChatPluginScript() {
            var script = document.createElement('script');
            script.src = 'https://app.aminos.ai/js/chat_plugin.js'; // The masked source URL
            script.setAttribute('data-bot-id', '15504'); // Set any additional attributes as needed
            document.body.appendChild(script);
        }

        // Load the script when the webpage is loaded
        window.onload = loadChatPluginScript;
</script>