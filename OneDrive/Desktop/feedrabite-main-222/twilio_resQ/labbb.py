from ortools.sat.python import cp_model

# Define the CSP model
model = cp_model.CpModel()

# Define variables (e.g., tasks, resources, time slots)
tasks = ["Task1", "Task2", "Task3"]
resources = ["Resource1", "Resource2"]
time_slots = range(5)

# Define variables for task assignments
task_assignments = {}
for task in tasks:
    task_assignments[task] = model.NewIntVar(0, len(resources) - 1, task)

# Add constraints
for task in tasks:
    model.Add(task_assignments[task] >= 0)  # Each task is assigned to a resource

for time_slot in time_slots:
    for resource in resources:
        model.Add(sum(1 for task in tasks if solver.Value(task_assignments[task]) == resources.index(resource)) <= 1)  # Each resource can handle at most one task per time slot (Note: This constraint might need adjustment based on actual problem requirements)

# Solve the CSP
solver = cp_model.CpSolver()
status = solver.Solve(model)

# Print the solution
if status == cp_model.FEASIBLE or status == cp_model.OPTIMAL:
    for task in tasks:
        print(f"Task {task} assigned to Resource {int(solver.Value(task_assignments[task])) + 1}")
else:
    print("No feasible solution found")