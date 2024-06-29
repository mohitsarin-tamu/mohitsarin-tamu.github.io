document.addEventListener('DOMContentLoaded', function() {
    const sendEmailBtn = document.getElementById('sendEmail');
    const nameInput = document.getElementById('name');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const emailAddress = document.getElementById('emailAddress').innerText.trim();
  
    sendEmailBtn.addEventListener('click', function() {
      const name = nameInput.value;
      const subject = subjectInput.value;
      const message = messageInput.value;
      
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  
      // Open default email client
      window.location.href = mailtoLink;
    });
  });
  