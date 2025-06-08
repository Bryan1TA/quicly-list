let items = []

function addItem() {
    const itemName = document.querySelector("#item").value

    if (itemName === "") {
        alert("Digite um item válido!")
        return
      }
  
      const item = {
          name: itemName,
          checked: false
      }
      items.push(item)

      document.querySelector("#item").value = ""
  
      showItemsList()
  }
  
  function showItemsList() {
    const sectionList = document.querySelector(".list")
    sectionList.textContent = ""

    items.sort((itemA, itemB) => Number(itemA.checked) - Number(itemB.checked))