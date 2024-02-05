import { formatEther } from 'viem'

type ValueType = string | number | bigint | boolean

export function bigintToFloat(value: ValueType, decimals: number = 18): number {
  const bigintValue = BigInt(value)
  const factor = BigInt(10 ** decimals)
  const integralPart = bigintValue / factor
  const fractionalPart = bigintValue % factor
  const fractionalAsString = fractionalPart.toString().padStart(decimals, '0') // Ensure 18 decimal places

  // Combine integral and fractional parts and convert to a floating-point number
  return parseFloat(integralPart.toString() + '.' + fractionalAsString)
}

export function formatEth(value: ValueType, round = false) {
  if (round) {
    return bigintToFloat(value).toLocaleString(undefined, {
      maximumFractionDigits: 4,
    })
  }

  const number = bigintToFloat(value)
    .toLocaleString(undefined, {
      maximumFractionDigits: 18,
    })
    .split('.')

  if (number.length === 1) {
    return number[0]
  }

  return `${number[0]}.${number[1].slice(0, 4)}`
}

export function formatUSD(value: bigint) {
  return bigintToFloat(value).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export function formatPoints(xp: bigint | string): string {
  if (typeof xp === 'string') xp = BigInt(xp)
  if (xp < 1_000000000_000000000n) return '0'
  if (xp < 1000000_000000000_000000000n) {
    return Number(xp / 1_000000000_000000000n).toLocaleString('en-US', {
      maximumFractionDigits: 0,
    })
  } else {
    return Number(xp / 1_000000000_000000000n).toLocaleString('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1,
    })
  }
}

export function formatPercentage(percentage: bigint): string {
  return (
    bigintToFloat(percentage).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }) + '%'
  )
}
