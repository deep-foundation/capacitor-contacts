import { useIsPlatformSupported } from "../hooks/use-is-platform-supported.js";

export function IfPlatformSupported({ children,childrenIfNotSupported }: IfPlatformSupportedOptions) {
  const isPlatformSupported = useIsPlatformSupported()

  return isPlatformSupported ? children : (childrenIfNotSupported ?? null)
  
}

export interface IfPlatformSupportedOptions {
  children: JSX.Element | null,
  childrenIfNotSupported?: JSX.Element
}