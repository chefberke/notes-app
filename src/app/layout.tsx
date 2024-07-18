import "../styles/globals.css";
import "@radix-ui/themes/styles.css";

import StoreProvider from "./StoreProvider";
import { Theme } from "@radix-ui/themes";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <Theme scaling="110%">
          <StoreProvider>{children}</StoreProvider>
        </Theme>
      </body>
    </html>
  );
}
