import { redirect } from "next/navigation";

import { ROUTES } from "@shared/config";

const SettingsPage = () => {
	redirect(ROUTES.Account);
};

export default SettingsPage;
