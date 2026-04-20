import { getServerTranslate } from "@/i18n/server";

export async function renderAccountingPage() {
    const t = await getServerTranslate("Accounting");

    t("serverOnly");

    return null;
}
