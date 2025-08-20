import Provider from "./provider";
import Router from "./router";
import "@/utils/i18n";

export default function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}
