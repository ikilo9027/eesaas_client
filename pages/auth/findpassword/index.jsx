import { PasswordValueProvider } from "@components/auth/hooks/passowrdHook"
import { MainStep } from "@components/auth/findpassword"

export default function FindpasswordMain() {
  return (
    <PasswordValueProvider>
      <MainStep />
    </PasswordValueProvider>
  )
}
