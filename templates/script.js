async function text_sum() {
    const text = document.getElementById('textInput').value;
    const spinner = document.getElementById('spinner');
    const summaryDiv = document.getElementById('summary');
    const button = document.querySelector('button');

    // Show spinner and disable button
    spinner.style.display = 'block';
    button.disabled = true;
    summaryDiv.innerText = '';

    const response = await fetch('/summarize', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    });

     // Hide spinner and enable button
     spinner.style.display = 'none';
     button.disabled = false;
 
     const data = await response.json();
     summaryDiv.innerText = data.summary;
}