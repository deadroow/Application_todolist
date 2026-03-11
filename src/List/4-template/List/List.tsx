//********** Imports **********//
import { TODO } from "../../../utils/types";
import { useSelector } from "../../../store";
import {
  Box,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { todoGlobalizedSelector } from "../../../redux/todoSlice";

//********** Component **********//
const ListComponent = () => {
  const todos = useSelector((state) =>
    todoGlobalizedSelector.selectAll(state.todos)
  );

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo: TODO) => (
        /* On utilise une Box ici car c'est l'élément le plus à l'extérieur de la boucle.
           La key doit être STABLE (todo.id) et non générée (Math.random).
        */
        <Box key={todo.id}>
          <ListItem disablePadding id={todo.id.toString()}>
            <ListItemButton>
              <ListItemText primary={todo.text} />
            </ListItemButton>
          </ListItem>
          <Divider />
        </Box>
      ))}
    </Box>
  );
};

ListComponent.displayName = "ListComponent";

export default ListComponent;