import { component$, useSignal } from "@builder.io/qwik";
export default component$(() => {
 const count = useSignal(0);
 return (<main><h1>Vite + Qwik</h1><button onClick$={() => count.value++}>count is {count.value}</button></main>);
});