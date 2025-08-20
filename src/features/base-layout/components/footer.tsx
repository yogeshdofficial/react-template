import type { HTMLAttributes } from "react";

interface FooterProps extends HTMLAttributes<HTMLElement> {}
export default function Footer({ ...props }: FooterProps) {
  return (
    <footer className={`${props.className}`} {...props}>
      Footer
    </footer>
  );
}
