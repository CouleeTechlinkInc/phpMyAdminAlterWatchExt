
// Saves options to chrome.storage
function save_options() {
  var targetUrl = document.getElementById('targetUrl').value;
  chrome.storage.sync.set({
    targetUrl: targetUrl
  }, function() {} );
}
function restore_options() {
  chrome.storage.sync.get({
    targetUrl: ''
  }, function(items) {
    document.getElementById('targetUrl').value = items.targetUrl;
    document.addEventListener('keyup', save_options);

  });
}
$(function(){
  restore_options();
})
document.addEventListener('load', restore_options);
