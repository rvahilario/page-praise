import { ProfileData } from '../@types'
import { fetchProfileData, useQuery, UseQueryResult } from '../api'

export const useProfileData = (
  userId: string,
): UseQueryResult<ProfileData, Error> => {
  return useQuery(['userProfileData', userId], () => fetchProfileData(userId), {
    enabled: !!userId,
  })
}
