function checkFriendship() {
    const message = document.getElementById("messageInput").value.trim();
    const resultDiv = document.getElementById("result");

    if (message === "") {
        resultDiv.innerHTML = "Please write a message first!";
        return;
    }

    // Simple fun logic (you can expand this)
    if (message.toLowerCase().includes("best friend") || message.length > 20) {
        resultDiv.innerHTML = "Yes! You’re totally best friend material! 😊";
    } else {
        resultDiv.innerHTML = "Hmm, maybe we need to hang out more! 😉";
    }
}