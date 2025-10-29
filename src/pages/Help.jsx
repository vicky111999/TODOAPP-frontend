import React from 'react'

const Help = () => {
  return (
    <>
  <p>
    
 1. ➕ Add a Task
 

Click “Add Task” (or use POST /api/todo endpoint).

Enter:

Title (required)

Description (optional)

Click Save / Submit
✅ Your task is added to the list.<br></br>

 2. 📋 View All Tasks

All tasks appear on the main page (or use GET /api/todo).

Each task shows:

Task title

Description

Completion status <br></br>

3. ✏️ Update a Task

Click Edit next to a task (or send PUT /api/todo/:id).

Change the title, description, or mark as completed.
✅ The app updates automatically. <br></br>

4. ❌ Delete a Task

Click the Delete button (or send DELETE /api/todo/:id).

Confirm deletion.
✅ The task is permanently removed.
   
  </p>
    </>
  )
}

export default Help