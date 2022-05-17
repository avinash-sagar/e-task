
import { Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ShopItem from './ShopItem'
import { Button, Box } from '@mui/material';

export const Content = ({ onAdd }) => {
    const [item, setItem] = useState([])
    let [val, setVal] = useState(1)
    const [pages, setPages] = useState(1)
    useEffect(() => {

        fetch(`http://api.products.luezoid.com/products?page=${pages}`, {
            headers: {
                'Authorization': 'Bearer ULxG9gG98KDGPql/BFI/woCN9T8=',
            }
        })

            .then(res => res.json())
            .then(data => setItem(data.items))


    }, [])

    const handleNext = () => {

        fetch(`http://api.products.luezoid.com/products?page=${pages + 1}`, {
            headers: {
                'Authorization': 'Bearer ULxG9gG98KDGPql/BFI/woCN9T8=',
            }
        })

            .then(res => res.json())
            .then(data => setItem(data.items))
        setPages(pages + 1)

    }
    const handlePrev = () => {
        fetch(`http://api.products.luezoid.com/products?page=${pages - 1}`, {
            headers: {
                'Authorization': 'Bearer ULxG9gG98KDGPql/BFI/woCN9T8=',
            }
        })

            .then(res => res.json())
            .then(data => setItem(data.items))
        setPages(pages - 1)
    }


    return (
        <>
            <Grid container my={10}
                sx={{
                    zIndex: '1',
                    display: 'flex',
                    justifyContent: 'space-between',

                }} >
                {
                    item.map((row, index) => {

                        return <Grid key={row.id} item md={4}
                            sx={{
                                display: 'flex', justifyContent: 'center', mx: {
                                    xs: '40px',
                                    sm: '40px',
                                    md: '0px',
                                    lg: '0px'
                                }
                            }} > <ShopItem image={row.bannerImage.url} onAdd={onAdd} val={val} setVal={setVal} />  </Grid>


                    })

                }

            </Grid>

            <Box my={4} sx={{
                display: 'flex',
                justifyContent: 'space-around'
            }} >
                <Button variant='contained' disabled={pages === 1} onClick={handlePrev} sx={{ bgcolor: 'black', color: 'white' }} >&larr; Prev   </Button>
                <Button variant='contained' onClick={handleNext} sx={{ bgcolor: 'black', color: 'white' }} >Next &rarr; </Button>
            </Box>
        </>
    )
}
