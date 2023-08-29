const Menu = ({ menu }) => {

    console.log(menu);

    return (

        <>

            {
                menu.map((item) => {

                    return (
                        <p>{item.title}</p>
                    );

                })
            }

        </>
    );
}

export default Menu;