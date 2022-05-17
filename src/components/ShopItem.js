
import {
    
    ButtonBase,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const ShopItem = ({ image,onAdd,val,setVal }) => {

    
   
    const incresed = () => {
        onAdd(val)
        setVal((pre)=>{
            return pre + 1
        })
    }


    return (
        <Card elevation={6}
            sx={{
                height: '400px',
                width: '300px',
                borderRadius:'4px',
                marginY: '30px',
                "&:hover": {
                    transform: 'translateY(5px)',
                    transition: "300ms",
                },
               
            }} >
            <CardMedia
                component={'img'}
                image={image}
                sx={{
                    width: '100%',
                    height: '230px'
                }}
            />

            <CardContent>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea mollitia quisquam nihil, explicabo voluptate.
                </Typography>
            </CardContent>
            <CardActions onClick={incresed}  sx={{
                display:'flex',
                justifyContent:'flex-end'
            }} >
                <ButtonBase sx={{
                    borderRadius: '50%',
                    color: 'blue',
                    border:'1px solid gray'
                }} >
                    <AddIcon  sx={{
                        width:'30px',
                        height:'30px'
                    }} />
                </ButtonBase>
            </CardActions>
        </Card>
    )
}

export default ShopItem
