'use client'
import TodoList from "./components/TodoList/todolist";
// import Govno from "./components/providers/themeprovider";
// import ThemeProvider from "./components/providers/themeprovider";
// import ThemedComponent from "./components/themed/themed";
export default function Home() {
  
  return (
    <main>
      <TodoList />     
      {/* <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider> */}
    </main>
  );
}
