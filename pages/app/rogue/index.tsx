import { PortalLayout } from "@/app/components/layouts/portal";
import { Rogue } from "@/app/containers";
import type { NextPage } from "next";

export default function (props: NextPage) {
  return (
    <PortalLayout>
      <Rogue.Trial />
    </PortalLayout>
  );
}
