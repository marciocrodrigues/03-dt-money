import { TransactionsContext } from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = transactions.reduce(
    (acumalate, transaction) => {
      if (transaction.type === 'income') {
        acumalate.income += transaction.price
        acumalate.total += transaction.price
      } else {
        acumalate.outcome += transaction.price
        acumalate.total -= transaction.price
      }

      return acumalate
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
