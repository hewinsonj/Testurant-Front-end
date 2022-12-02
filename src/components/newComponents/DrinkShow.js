import React, { useEffect, useState } from "react"
import { Label, Icon, Item, Button, Segment, Grid, Comment, Form, Modal, Progress, Divider } from 'semantic-ui-react'
import { useNavigate, useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getDrink, updateDrink, deleteDrink } from '../../api/drink'
import LoadingScreen from "../shared/LoadingPage"
import DrinkUpdateModal from "./DrinkUpdateModal"
import FoodUpdateModal from "./FoodUpdateModal"



const DrinkShow = ({ user, msgAlert, drink}) => {
    const [activity, setActivity] = useState({})
    const [updated, setUpdated] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false)
   

    // useEffect(() => {
    //   getQuestion(user, question.id)
    //     .catch((error) => {
    //         msgAlert({
    //             heading: 'Failure',
    //             message: 'Show Question failed' + error,
    //             variant: 'danger'
    //         })
    //     })
    // },[updated])

  
    

    const handleDeleteDrink = () => {
      deleteDrink(user, drink.id)
      .then(() => {
          setDeleted(true)
          msgAlert({
              heading: 'Success',
              message: 'Deleting a Drink',
              variant: 'success'
          })
      })
      .then(() => {
        navigate(`/menu-nav`)
      })
      .catch((error) => {
          msgAlert({
              heading: 'Failure',
              message: 'Deleting a Drink Failure' + error,
              variant: 'danger'
          })
      })
  }



// if (deleted) navigate('/activities')
// const allActivitiesJSX = allActivities.map(activity => {

  if (!drink) {
    return (
      <LoadingScreen />
    )
  }

  return(
    <>  
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button floated="right">Show Drink Item</Button>}
        size='large'
        >
            <Modal.Content scrolling>
      <Segment    
          inverted
          verticalAlign='middle' 
          id="segment"
          
      >
        <Segment>
          <Grid padded>
              <h2>{drink.name} </h2>
          </Grid>
        </Segment>
        <Segment inverted class="capitalize-me">
            <Grid centered stretched>
                <Grid.Row padded>
                    <Segment fluid>
                    <Grid centered stretched>
                <Grid.Row padded>
                    <Segment fluid>
                        <Grid centered>
                            <Grid.Row>
                                <h3>Ingredients: </h3>
                                <h3>
                                  {drink.ingredients}
                                </h3>
                            </Grid.Row>
                            <Grid.Row>
                              <h3>
                                Contains Tree Nuts: {
                                drink.con_tree_nut === true ?
                                <div>
                                  <Segment color="red" inverted>
                                    <Icon name='warning'/>True<Icon name='warning'/>
                                  </Segment>
                                </div> 
                                 : 
                                 <div><Icon name='window close outline'/>False<Icon name='window close outline'/></div> 
                                 }
                              </h3>
                            </Grid.Row>
                            <Grid.Row>
                              <h3>
                                Contains Peanuts: {
                                drink.con_peanut === true ?
                                <div>
                                  <Segment color="red" inverted>
                                    <Icon name='warning'/>True<Icon name='warning'/>
                                  </Segment>
                                </div>  
                                 : 
                                 <div><Icon name='window close outline'/>False<Icon name='window close outline'/></div> 
                                 }
                              </h3>
                            </Grid.Row>
                            <Grid.Row>
                              <h3>
                                Contains Shellfish: {
                                drink.con_shellfish === true ?
                                <div>
                                  <Segment color="red" inverted>
                                    <Icon name='warning'/>True<Icon name='warning'/>
                                  </Segment>
                                </div> 
                                 : 
                                 <div><Icon name='window close outline'/>False<Icon name='window close outline'/></div> 
                                 }
                              </h3>
                            </Grid.Row>
                            <Grid.Row>
                              <h3>
                                Contains Soy: {
                                drink.con_soy === true ?
                                <div>
                                  <Segment color="red" inverted>
                                    <Icon name='warning'/>True<Icon name='warning'/>
                                  </Segment>
                                </div> 
                                 : 
                                 <div><Icon name='window close outline'/>False<Icon name='window close outline'/></div> 
                                 }
                              </h3>
                            </Grid.Row> 
                            <Grid.Row>
                              <h3>
                                Contains Fish: {
                                drink.con_fish === true ?
                                <div>
                                  <Segment color="red" inverted>
                                    <Icon name='warning'/>True<Icon name='warning'/>
                                  </Segment>
                                </div> 
                                 : 
                                 <div><Icon name='window close outline'/>False<Icon name='window close outline'/></div> 
                                 }
                              </h3>
                            </Grid.Row>
                            <Grid.Row>
                              <h3>
                                Contains Wheat: {
                                drink.con_wheat === true ?
                                <div>
                                  <Segment color="red" inverted>
                                    <Icon name='warning'/>True<Icon name='warning'/>
                                  </Segment>
                                </div>  
                                 : 
                                 <div><Icon name='window close outline'/>False<Icon name='window close outline'/></div> 
                                 }
                              </h3>
                            </Grid.Row>    
                            <Grid.Row>
                              <h3>
                                Contains Egg: {
                                drink.con_egg === true ?
                                <div>
                                  <Segment color="red" inverted>
                                    <Icon name='warning'/>True<Icon name='warning'/>
                                  </Segment>
                                </div>  
                                 : 
                                 <div><Icon name='window close outline'/>False<Icon name='window close outline'/></div> 
                                 }
                              </h3>
                            </Grid.Row>
                            <Grid.Row>
                              <h3>
                                Contains Gluten: {
                                drink.con_gluten === true ?
                                <div>
                                  <Segment color="red" inverted>
                                    <Icon name='warning'/>True<Icon name='warning'/>
                                  </Segment>
                                </div>  
                                 : 
                                 <div><Icon name='window close outline'/>False<Icon name='window close outline'/></div> 
                                 }
                              </h3>
                            </Grid.Row>
                            <Grid.Row>
                              <h3>
                                Contains Gluten: {
                                drink.con_gluten === true ?
                                <div>
                                  <Segment color="red" inverted>
                                    <Icon name='warning'/>True<Icon name='warning'/>
                                  </Segment>
                                </div> 
                                 : 
                                 <div><Icon name='window close outline'/>False<Icon name='window close outline'/></div> 
                                 }
                              </h3>
                            </Grid.Row>
                            <Grid.Row>
                              <h3>
                                Contains Sesame: {
                                drink.con_sesame === true ?
                                 <div>
                                  <Segment color="red" inverted>
                                    <Icon name='warning'/>True<Icon name='warning'/>
                                  </Segment>
                                </div> 
                                 : 
                                 <div><Icon name='window close outline'/>False<Icon name='window close outline'/></div> 
                                 }
                              </h3>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Grid.Row>
            </Grid>
                    </Segment>
                </Grid.Row>
            </Grid>
        </Segment>
      </Segment>
      </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Close
                </Button>
                <Button color='black' onClick={handleDeleteDrink}>
                    Delete Item
                </Button>
                <DrinkUpdateModal drink={drink} user={user} msgAlert={msgAlert}/>
            </Modal.Actions>
        </Modal>
    </>
  )
}


export default DrinkShow