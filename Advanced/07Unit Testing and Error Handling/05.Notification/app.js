function notify(message) {
  let notificatioonDiv = document.getElementById('notification');
  notificatioonDiv.textContent = message;
  notificatioonDiv.style.display = 'block';

  let dataNotificationAttribute = notificatioonDiv.getAttribute('data-notification-set');
  if (dataNotificationAttribute !== 'true') {
    notificatioonDiv.setAttribute('data-notification-set', 'true');
    notificatioonDiv.addEventListener('click', notificationDivClickHandler);
  }

    function notificationDivClickHandler(e) {
      let notificationDiv = document.getElementById('notification');
      notificationDiv.style.display = 'none';
    
  }
}