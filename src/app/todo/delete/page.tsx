'use client'

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "~/components/ui/alert-dialog"
import { Trash2 } from "lucide-react"
import { toast } from "sonner"
import * as z from "zod"
import { api } from "~/trpc/react"


const formSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  from: z.date(),
  to: z.date(),
  status: z.boolean(),
})

type FormValues = z.infer<typeof formSchema>

export default function TaskList() {
  const [tasks, setTasks] = useState<FormValues[]>([])

  // Llamada para obtener todas las tareas
  const getAllTasksQuery = api.useTasksRouter.getAllTasks.useQuery()
  const deleteTaskMutation = api.useTasksRouter.deleteTask.useMutation()

  // Obtener las tareas al cargar el componente
  useEffect(() => {
    if (getAllTasksQuery.data) {
      setTasks(getAllTasksQuery.data.map(task => ({
        ...task,
        from: new Date(task.from),
        to: new Date(task.to),
      })))
    }
  }, [getAllTasksQuery.data])

  
  const handleDelete = (id: string) => {

    deleteTaskMutation.mutate({ id }, {
      onSuccess: () => {
        setTasks(tasks.filter(task => task.id !== id))
        toast.success("Task deleted successfully!")
      },
      onError: () => {
        toast.error("Failed to delete task.")
      }
    })
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>From</TableHead>
              <TableHead>To</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell className="font-medium">{task.title}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{formatDate(task.from)}</TableCell>
                <TableCell>{formatDate(task.to)}</TableCell>
                <TableCell>
                  <Badge variant={task.status ? "default" : "destructive"}>
                    {task.status ? "Completed" : "Pending"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete the task.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete(task.id)}>
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(date)
}
