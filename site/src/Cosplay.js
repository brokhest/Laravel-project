import { Button, FormControlLabel, FormGroup } from '@material-ui/core'
import React from 'react'
import { AppBar, Container, IconButton, Toolbar, Typography, Box, Paper, Grid, CardMedia, CardContent, Card, CardActions } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Pagination } from '@material-ui/lab';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom"
import { CardMembershipSharp, MinimizeOutlined } from '@material-ui/icons';


/*const cardss = [["Аниме стафф", "Бенто, Зонты, Очки, Часы"],
["Дакимакуры", ""],
["Атрибутика", "Гобелены, Катаны, Комиксы, Кошельки, Наушники, Пазлы, Плед, Постельное бельё, Футляр для очков"],
["Косплей", "Костюмы и атрибутика"]];*/

const cardss = [
  { title: 'Аниместафф', price: 1500 },
  { title: 'Дакимакуры', price: 1994 },
  { title: 'Атрибутика', price: 2000 },
  { title: 'Косплей', price: 3000 },
  { title: 'Товар 1', price: 4000 },
  { title: 'Товар 2', price: 5000 },
  { title: 'Товар 3', price: 6000 },
  { title: 'Товар 4', price: 7000 },
  { title: 'Аниместафф', price: 8000 },
  { title: 'Дакимакуры', price: 9000 },
  { title: 'Атрибутика', price: 10000 },
  { title: 'Косплей', price: 11000 },
  { title: 'Косплей', price: 12000 },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),


    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.3)"
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(9)
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  },
  paperLeftBlock: {
    //height: 100,
  },
  paperLeftLeftBlock: {
    //height: 100,
    width: 500,
    marginRight: 20
  },
  paperRightBlock: {
    height: 200,
  },
  typographyMainStyle: {
    flexGrow: 1,
    width: '100%',
  },
  checked: {},
  myUI: {
    justifyContent: 'center',
    margin: '10px 0px'
  }
}))


const pageCount = 12;
//productList = cards
//
const optionsSpis = ['Возрастание по цене', 'Убывание по цене', 'Возрастание по названию', 'Убывание по названию'];
const crd = [1]

export default function Cosplay() {

  const [page, setPage] = useState(1);
  const [cards, setList] = useState(cardss); // .slice((page - 1) * (pageCount + 1), page - 1 + pageCount)

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedF: false,
    checkedG: false,
  })
  const [minCost, setMinCost] = useState('0')
  const [maxCost, setMaxCost] = useState('30000')
  const [priceFilter, setPriceFilter] = useState(cards)
  const [checkFilter, setCheckFilter] = useState(cards)

  const handleClick = () => {
    console.info(`You clicked ${optionsSpis[selectedIndex]}`);
  };



  const handleChange = (event) => {
    const newState = { ...state, [event.target.name]: event.target.checked }

    setState(newState);
    handleFilter(newState);
  };

  const handleFilter = (newState) => {
    var newProductList = []
    var newProductList2 = []

    if (newState['checkedA'] == newState['checkedB'] && newState['checkedB'] == newState['checkedF'] && newState['checkedF'] == newState['checkedG']) {
      newProductList = checkFilter;
      newProductList2 = cardss;
    }
    else {
      /*
      for (const item of checkFilter) {
        if (newState['checkedA']) {
          if (item.title === 'Аниместафф') {
            newProductList = newProductList.concat(item)
          }
        }
        if (newState['checkedB']) {
          if (item.title === 'Дакимакуры') {
            newProductList = newProductList.concat(item)
          }
        }
        if (newState['checkedF']) {
          if (item.title === 'Косплей') {
            newProductList = newProductList.concat(item)
          }
        }
        if (newState['checkedG']) {
          if (item.title === 'Атрибутика') {
            newProductList = newProductList.concat(item)
          }
        }
        for (const item of cardss) {
          if (newState['checkedA']) {
            if (item.title === 'Аниместафф') {
              newProductList2 = newProductList2.concat(item)
            }
          }
          if (newState['checkedB']) {
            if (item.title === 'Дакимакуры') {
              newProductList2 = newProductList2.concat(item)
            }
          }
          if (newState['checkedF']) {
            if (item.title === 'Косплей') {
              newProductList2 = newProductList2.concat(item)
            }
          }
          if (newState['checkedG']) {
            if (item.title === 'Атрибутика') {
              newProductList2 = newProductList2.concat(item)
            }
          }
        }*/
        if (newState['checkedA']) {
          for (const item of checkFilter) {
            if (item.title === 'Аниместафф') {
              newProductList = newProductList.concat(item)
            }
          }
          for (const item of cardss) {
            if (item.title === 'Аниместафф') {
              newProductList2 = newProductList2.concat(item)
            }
          }
        }

        if (newState['checkedB']) {
          for (const item of checkFilter) {
            if (item.title === 'Дакимакуры') {
              newProductList = newProductList.concat(item)
            }
          }
          for (const item of cardss) {
            if (item.title === 'Дакимакуры') {
              newProductList2 = newProductList2.concat(item)
            }
          }
        }

        if (newState['checkedF']) {
          for (const item of checkFilter) {
            if (item.title === 'Косплей') {
              newProductList = newProductList.concat(item)
            }
          }
          for (const item of cardss) {
            if (item.title === 'Косплей') {
              newProductList2 = newProductList2.concat(item)
            }
          }
        }
        if (newState['checkedG']) {
          for (const item of checkFilter) {
            if (item.title === 'Атрибутика') {
              newProductList = newProductList.concat(item)
            }
          }
          for (const item of cardss) {
            if (item.title === 'Атрибутика') {
              newProductList2 = newProductList2.concat(item)
            }
          }
      }
    }
    //newProductList.sort((a, b) => a.price > b.price ? 1 : -1); //Суюда нужно вставить сортировку по флажкам, а в фильтре по цене
    //newProductList2.sort((a, b) => a.price > b.price ? 1 : -1); //сделать не удаление из массива, а добавление элементов в пустой массив, как это сделано в фильтре по чекбоксу
    setList(newProductList); //сортировка всё ещё нужна, но её, наверное, можно будет сделать через флажок состояния и handle
    setPriceFilter(newProductList2);
  };

  const handlePaginationChange = (event, value) => {
    setPage(value);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    var cards2 = priceFilter;
    var cards3 = checkFilter;
    if (index == 0) {
      cards.sort((a, b) => a.price > b.price ? 1 : -1);
      cards2.sort((a, b) => a.price > b.price ? 1 : -1);
      cards3.sort((a, b) => a.price > b.price ? 1 : -1);

    } else if (index == 1) {
      cards.sort((a, b) => a.price < b.price ? 1 : -1);
      cards2.sort((a, b) => a.price < b.price ? 1 : -1);
      cards3.sort((a, b) => a.price < b.price ? 1 : -1);
    } else if (index == 2) {
      cards.sort((a, b) => a.title > b.title ? 1 : -1);
      cards2.sort((a, b) => a.title > b.title ? 1 : -1);
      cards3.sort((a, b) => a.title > b.title ? 1 : -1);
    } else {
      cards.sort((a, b) => a.title < b.title ? 1 : -1);
      cards2.sort((a, b) => a.title < b.title ? 1 : -1);
      cards3.sort((a, b) => a.title < b.title ? 1 : -1);
    }
    setPriceFilter(cards2);
    setCheckFilter(cards3);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  class Product_button extends React.Component {
    onclick() {
      window.location.assign('http://localhost:3000/basket');
    }

    render() {
      return (<Button size="small" color="primary" onClick={(e) => this.onclick(e)}>Добавить</Button>);
    }
  }

  class Filter_button extends React.Component {
    onclick() {

      //новое удаление
      var newProductList3 = []
      for (const item of cardss) {
        if (Number(item.price) >= Number(minCost) && Number(item.price) <= Number(maxCost)) {
          newProductList3 = newProductList3.concat(item)
        }
      }
      var newProductList4 = []
      for (const item of priceFilter) {
        if (Number(item.price) >= Number(minCost) && Number(item.price) <= Number(maxCost)) {
          newProductList4 = newProductList4.concat(item)
        }
      }
      setList(newProductList4);
      setCheckFilter(newProductList3);
      //старое удаление
      /*
      var newProductList = priceFilter;
      var min = -2;
      var max = 100000;
      for (const item of priceFilter) {
        if (Number(item.price) < Number(minCost)) {
          min = priceFilter.indexOf(item);
          console.log(min, item.price, minCost);
        } else if (Number(item.price) > Number(maxCost)) {
          if (max == 100000) {
            max = priceFilter.indexOf(item);
          }
          
        }
      }
      if (min >= 0 && max <= 100000) {
        newProductList = priceFilter.slice(min + 1, max);
        console.log(min, max, "2g");
      }
 
      var newProductList2 = cardss;
      var min2 = -2;
      var max2 = 100000;
      for (const item of cardss) {
        if (Number(item.price) < Number(minCost)) {
          min2 = cardss.indexOf(item);
        } else if (Number(item.price) > Number(maxCost)) {
          if (max2 == 100000) {
            max2 = cardss.indexOf(item);
          }
          
        }
      }
      if (min2 >= 0 && max2 <= 100000) {
        newProductList2 = cardss.slice(min2 + 1, max2);
      }*/
      //setList(newProductList);
      //setCheckFilter(newProductList2);
    } //причина неисправности - массив не сортирован, поэтому такая билиберда происходит. Возможно. лучше всего сделать так, чтобы
    // все сортировки обращались к одному классу, иначе это отихий ужас, а не обработка данных. Да, проблема именно в сортировке со стороны чекбокса. 

    render() {
      return (<Button type="submit" color="secondary" variant="contained" onClick={(e) => this.onclick(e)}>Фильтр по цене</Button>);
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()
  }

  /*    onclick() {
        var newProductList = cards;
  
        for (const item of newProductList) {
          if (Number(item.price) < Number(this.id.inputMin.value)) {
              newProductList.splice(newProductList.indexOf(item),1);
          }
        }
        setList(newProductList);  
      }
  */


  return (
    <>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
          <Grid xs="12">
            <Paper className={classes.paperLeftBlock} align="Center">
              <Typography className={classes.typographyMainStyle} align="center" variant="h5" color="textPrimary" gutterBottom>
                Каталог
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: 600 }}>
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={cardss.map((option) => option.title)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search input"
                        margin="normal"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search' }}
                      />
                    )}
                  />
                </div>
                <Button color="primary">
                  Применить
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <main>
        <Container className={classes.cardGrid} maxWidth="lg">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Paper className={classes.paperLeftLeftBlock} >
              <Grid container direction="column" alignItems="center" xs={8} sm={4} md={3} >
                <Typography className={classes.typographyMainStyle} align="center" variant="h5" color="textPrimary" gutterBottom>
                  Фильтры
                </Typography>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <TextField
                    onChange={(e) => setMinCost(e.target.value)}
                    required
                    type="number"
                    id="inputMin"
                    label="Цена от"
                    defaultValue="0"
                    variant="filled"
                  />
                  <TextField
                    onChange={(e) => setMaxCost(e.target.value)}
                    type="number"
                    id="inputMax"
                    label="Цена до"
                    defaultValue="30000"
                    variant="filled"
                  />
                  <Filter_button />
                </form>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                    label="Аниме стафф"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                    label="Дакимакуры"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={state.checkedF} onChange={handleChange} name="checkedF" />}
                    label="Косплей"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
                    label="Атрибутика"
                  />
                </FormGroup>
                <Grid container direction="column" alignItems="center" xs={8} sm={4} md={18} >
                  <Grid item xs={12}>
                    <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                      <Button onClick={handleClick}>{optionsSpis[selectedIndex]}</Button>
                      <Button
                        color="primary"
                        size="small"
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                      >
                        <ArrowDropDownIcon />
                      </Button>
                    </ButtonGroup>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                          }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList id="split-button-menu">
                                {optionsSpis.map((option, index) => (
                                  <MenuItem
                                    key={option}
                                    //disabled={index === 2}
                                    selected={index === selectedIndex}
                                    onClick={(event) => handleMenuItemClick(event, index)}
                                  >
                                    {option}
                                  </MenuItem>
                                ))}
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </Grid>
                </Grid >
              </Grid>
            </Paper>
            <Grid container spacing={4}>
              {cards.slice(page * pageCount - pageCount, page * pageCount).map((card) => (
                <Grid item key={card} xs={8} sm={4} md={3}>
                  <Card className={classes.card}>
                    <CardMedia component={Link} style={{ textDecoration: 'none' }} to={"/product" + "/" + card.title}
                      className={classes.cardMedia}
                      image="https://i.postimg.cc/zvJpD5vp/272d6857-eb13-4756-a6b9-7d7594f9c2df.jpg"
                      //image="https://source.unsplash.com/random"
                      title="Image title" />
                    <CardContent component={Link} style={{ textDecoration: 'none' }} to={"/product" + "/" + card.title} className={classes.cardContent}>
                      <Typography variant="h5" gutterBottom>
                        {card.title}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Product_button />
                      <Grid item>
                        <Typography variant="subtitle1">{card.price}</Typography>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              ))}

            </Grid>

          </div>

        </Container>
        <Pagination count={Math.ceil(cards.length / pageCount)} page={page} className={classes.myUl} classes={{ ul: classes.myUl }} onChange={handlePaginationChange} />
      </main>
    </>
  )
}

//onChange={(event) => handleChangeCostMax(event, event.target.value)}