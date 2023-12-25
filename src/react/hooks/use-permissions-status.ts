import { useEffect, useState } from "react";
import { checkPermissions } from "../../checkPermissions.js";
import { PermissionStatus } from "../../permissionStatus.js";
import { App } from "@capacitor/app"; // Make sure to import the App from capacitor.
import { emitter } from "../../emitter.js";
import { packageLog } from "../../packageLog.js";

export function usePermissionsStatus(): UsePermissionsStatusResult {
  const log = packageLog.extend(usePermissionsStatus.name)
  const [permissionsStatus, setPermissionsStatus] = useState<
    PermissionStatus | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState(true);

  async function updatePermissionsStatus () {
    const permissionsStatus = await checkPermissions();
    setPermissionsStatus(permissionsStatus);
    setIsLoading(false);
  };

  useEffect(() => {
    updatePermissionsStatus();

    const resumeListener = App.addListener("resume", updatePermissionsStatus);
    const permissionsChangedListener = emitter.on(
      "permissionsChanged",
      (permissionsStatus: PermissionStatus) => {
        log(`permissionsChanged event received`, permissionsStatus);
        setPermissionsStatus(permissionsStatus);
      },
    );

    return () => {
      resumeListener.then((resumeListener) => resumeListener.remove());
    };
  }, []);

  return {
    permissionsStatus,
    isLoading,
    updatePermissionsStatus
  };
}

export type UsePermissionsStatusResult = {
  permissionsStatus: PermissionStatus | undefined;
  isLoading: boolean;
  updatePermissionsStatus: () => void
};
