import "./Layout.scss";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <main id="main-content">{children}</main>;
}
