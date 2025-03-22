from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from menu_item import MenuItem
from menu_manager import MenuManager


app = FastAPI()


class MenuItemCreate(BaseModel):
    name: str
    price: int


@app.get("/menu/items")
async def get_all_items():
    items = MenuManager.all_items()  
    if not items:
        raise HTTPException(status_code=404, detail="Aucun élément trouvé")
    return items


@app.get("/menu/items/{item_name}")
async def get_item(item_name: str):
    item = MenuManager.get_by_name(item_name)  
    if not item:
        raise HTTPException(status_code=404, detail=f"L'élément '{item_name}' n'a pas été trouvé")
    return item


@app.post("/menu/items")
async def add_item(item: MenuItemCreate):
    menu_item = MenuItem(item.name, item.price) 
    menu_item.save()  
    return {"message": f"L'élément '{item.name}' a été ajouté avec succès"}


@app.put("/menu/items/{item_name}")
async def update_item(item_name: str, item: MenuItemCreate):
    existing_item = MenuManager.get_by_name(item_name) 
    raise HTTPException(status_code=404, detail=f"L'élément '{item_name}' n'a pas été trouvé")
    
    menu_item = MenuItem(item_name, 0)  
    menu_item.update(item.name, item.price)
    return {"message": f"L'élément '{item_name}' a été mis à jour en '{item.name}' avec un prix de {item.price} MAD"}


@app.delete("/menu/items/{id}")
async def delete_item(id: str):
    item = MenuItem(id, 0)  
    if item:
        item.delete()  
        return {"message": f"L'élément '{id}' a été supprimé avec succès"}
    else:
        return {"status_code":404, "detail":f"L'élément '{id}' n'a pas été trouvé"}
    
