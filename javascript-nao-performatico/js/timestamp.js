function getNewTimestamp() {
  let data = new Date();
  let formatDate = data.toLocaleDateString("pt-BR").toString();
  let formatTime = data.toLocaleTimeString("pt-BR").toString();

  return `${formatDate} ${formatTime}`;
}