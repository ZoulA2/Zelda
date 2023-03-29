export async function traer_zelda(){
    try{
        const zel = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters').then((res)=> {
            return res.json();
        });
        return zel.data;
    } catch (error) {
        console.log(error);
    }
}