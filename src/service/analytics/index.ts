import axios from 'axios'
import { AnalyticsData } from './types'
import { getConfigValue } from '@brojs/cli'

class AnalyticsService {
    url = getConfigValue('ui-sample-project.analytic-api')

    getAnalytics = async () => {
        const response = await axios.get<AnalyticsData>(`${this.url}/`)

        return response.data
    }
}

export const analyticsService = new AnalyticsService