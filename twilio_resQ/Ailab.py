def minimax(depth, nodeIndex, isMax, values, maxDepth):
    if depth == maxDepth:
        return values[nodeIndex]
    
    if isMax:
        return max(
            minimax(depth + 1, nodeIndex * 2, False, values, maxDepth),
            minimax(depth + 1, nodeIndex * 2 + 1, False, values, maxDepth)
        )
    else:
        return min(
            minimax(depth + 1, nodeIndex * 2, True, values, maxDepth),
            minimax(depth + 1, nodeIndex * 2 + 1, True, values, maxDepth)
        )


values = [2, 3, 5, 9, 0, 1, 7, 5]
maxDepth = 3
print("The optimal value is:", minimax(0, 0, True, values, maxDepth))
