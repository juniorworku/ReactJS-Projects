import { useState } from 'react'
import { Button, Stack } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import BudgetCard from './Components/BudgetCard'
import AddBudgetModal from './Components/AddBudgetModal' 
import { useBudgets } from './contexts/BudgetsContext'

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] =useState(false)
  const { budgets } = useBudgets

  return (
    <>
    <Container className='my-4'>
      <Stack direction='horizontal' gap="2" className='nb-4'>
        <h1 className='me-auto'> Budgets</h1>
        <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}> Add Budget</Button>
        <Button variant="outline-primary"> Add Expense</Button>
      </Stack>
      <div style={{
         display: "grid", 
         gridTemplateColumns:"repeat(auto-fill, minmax(300px,1fr)", 
         gap:"1rem", 
         alignItems:"flex-start"}}>

        {budgets.map(budget => (
          <BudgetCard 
          key={budget.id}
          name= {budget.name} 
          amount={budget.amount} 
          max={budget.max} />

        ))}
        
        
      </div>

    </Container>
    <AddBudgetModal show= {showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)} />
    </>
    

  )
}

export default App
