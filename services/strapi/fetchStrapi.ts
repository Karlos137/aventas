import qs from 'query-string'

export const fetchStrapi = async <T>(
  endpoint: string,
  urlParamsObject: { [key: string]: any } = {},
  options = {},
): Promise<{ data: T }> => {
  const token = process.env.API_TOKEN

  const revalidateNumber = parseInt(process.env.NEXT_PUBLIC_REVALIDATE || '')
  const revalidate = Number.isInteger(revalidateNumber) ? revalidateNumber : 60

  // Merge default and user options
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: token ? `Bearer ${token}` : '',
    },
    next: {
      revalidate,
    },
    ...options,
  }

  const urlParamsString = qs.stringify(
    urlParamsObject.locale === 'cs'
      ? { ...urlParamsObject, locale: 'cs-CZ' }
      : urlParamsObject,
    { arrayFormat: 'index' },
  )

  const queryString = urlParamsString ? `?${urlParamsString}` : ''

  const requestUrl = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}${queryString}`

  const res = await fetch(requestUrl, mergedOptions)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
