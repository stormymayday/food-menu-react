import MenuItem from "./MenuItem.jsx";

const Menu = ({ menu }) => {

    console.log(menu);

    return (

        <>

            {
                menu.map((item) => {

                    return (
                        <MenuItem key={item.id} {...item} />
                    );

                })
            }

        </>
    );
}

export default Menu;