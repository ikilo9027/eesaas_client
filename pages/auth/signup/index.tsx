import { PasswordValueProvider } from "@components/auth/hooks/passowrdHook"
import { Signup } from "@components/auth/signup"

export default function SignupMain() {
  return (
    <PasswordValueProvider>
      <Signup></Signup>
    </PasswordValueProvider>
  )
}
