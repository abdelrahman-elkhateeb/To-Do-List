import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useSubmitTodo } from "@/services/useSubmitTodo";

type Inputs = {
  title: string,
  priority: string
}

export default function AddTaskInput() {
  const { submitTodoMutate, isPending, error } = useSubmitTodo();

  const { register, handleSubmit, control, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    submitTodoMutate(data, {
      onSuccess: () => reset()
    });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-10 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border">
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between gap-2 w-full">
        <Input
          placeholder="What needs to be done?"
          className="flex-1 bg-transparent border-none focus-visible:ring-0 text-lg"
          {...register("title", { required: true })}
        />
        <div className="flex gap-2">
          <Controller
            name="priority"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            )} />

          <Button type="submit" size="icon" className="shrink-0" disabled={isPending}>
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </div>
  )
}
