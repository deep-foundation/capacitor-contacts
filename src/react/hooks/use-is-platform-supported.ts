import { useState, useEffect } from "react"
import {Device, DeviceInfo} from '@capacitor/device'

export function useIsPlatformSupported() {
  const [platform, setPlatform] = useState<DeviceInfo['platform'] | undefined>(undefined)

  useEffect(() => {
    Device.getInfo().then(deviceInfo => {
      setPlatform(deviceInfo.platform)
    })
  }, [])

  return {
    isLoading: platform === undefined,
    isSupported: platform === undefined ? undefined : platform === 'ios' || platform === 'android',
  }
}