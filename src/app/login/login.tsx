import FormLogin from "@/components/authentication/login/form";
import TopBar from "@/components/authentication/topbar";
import { Wallpaper } from "@/components/authentication/wallpaper";

export function Login() {
  return (
    <>
      <Wallpaper
        children={
          <>
            <TopBar />
            <FormLogin />
          </>
        }
      ></Wallpaper>
    </>
  );
}
