import { GoogleGenerativeAI } from "@google/generative-ai";
document.getElementById('dots').style.display = 'none';
document.getElementById('quote-bubble').style.display = 'none';

async function generateName() {
    document.getElementById('response').textContent = '';
    document.getElementById('quote-bubble').style.display = 'block';
    document.getElementById('dots').style.display = 'block';
    var API_KEY = "AIzaSyDdcHq8dCKpjjlC1jDQVgBKhdBvhAjnRGA";
    var genAI = new GoogleGenerativeAI(API_KEY);
    var model = genAI.getGenerativeModel({ model: "gemini-1.5-pro", systemInstruction: "Create a name for a Pirate with the prompt and only return one name with 50 words of the context. Return the name clearly at the start with inverted commas" });

    var prompt = `${document.getElementById("description").value}`;

    var result = await model.generateContent(prompt);
    if (result.response.text()) {
        document.getElementById('dots').style.display = 'none';
        document.getElementById('response').textContent = result.response.text();
    }
}
document.getElementById('image').addEventListener('click', function() {
    this.style.width = '1000px';
    this.style.height = '1000px';
    setTimeout(() => {
        this.style.width = '100px';
        this.style.height = '100px';
    }, 500);

});
document.getElementById('image').addEventListener('click', generateName);
