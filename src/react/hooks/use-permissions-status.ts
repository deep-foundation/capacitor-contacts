import { useEffect, useState } from "react";
import { checkPermissions } from "../../checkPermissions.js";
import { PermissionStatus } from "../../permissionStatus.js";
import { App } from "@capacitor/app"; // Make sure to import the App from capacitor.
import { emitter } from "../../emitter.js";
import { packageLog } from "../../packageLog.js";

export function usePermissionStatus(): UsePermissionStatusResult {
  const log = packageLog.extend(usePermissionStatus.name)
  const [permissionStatus, setPermissionStatus] = useState<
    PermissionStatus | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown|undefined>(undefined);

  async function updatePermissionStatus () {
    let permissionStatus: PermissionStatus;
    try {
      permissionStatus = await checkPermissions();
      setPermissionStatus(permissionStatus);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    updatePermissionStatus();

    const resumeListener = App.addListener("resume", updatePermissionStatus);
    const permissionsChangedListener = emitter.on(
      "permissionsChanged",
      (permissionStatus: PermissionStatus) => {
        log(`permissionsChanged event received`, permissionStatus);
        setPermissionStatus(permissionStatus);
      },
    );

    return () => {
      resumeListener.then((resumeListener) => resumeListener.remove());
      emitter.off("permissionsChanged", permissionsChangedListener);
    };
  }, []);

  return {
    permissionStatus: permissionStatus,
    isLoading,
    updatePermissionStatus,
    error
  };
}

export type UsePermissionStatusResult = {
  permissionStatus: PermissionStatus | undefined;
  isLoading: boolean;
  updatePermissionStatus: () => void,
  error?: unknown|undefined
};
