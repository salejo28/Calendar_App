import React, { useEffect, useState } from 'react'
import { ScrollView, View, TouchableOpacity, RefreshControl } from 'react-native'
import { Text, HelperText } from 'react-native-paper'
import { Calendar, LocaleConfig, Agenda } from 'react-native-calendars'
import IonIcons from 'react-native-vector-icons/Ionicons'

import { styles } from './Styles'

export const CalendarView = ({ navigation }) => {

    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        console.log("Loading...")
    }, [])

    const onRefresh = () => {
        setRefreshing(true)
        console.log("Refreshing")
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }

    return (

        <View
            style={styles.conatiner}
        /* contentContainerStyle={styles.conatiner}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} */
        >            
            <Agenda
                // The list of items that have to be displayed in agenda. If you want to render item as empty date
                // the value of date key has to be an empty array []. If there exists no value for date key it is
                // considered that the date in question is not yet loaded
                items={{
                    '2021-08-22': [{ name: 'item 1 - any js object' }],
                    '2021-08-23': [{ name: 'item 2 - any js object', height: 80 }],
                    '2021-08-24': [],
                    '2021-08-25': [{ name: 'item 3 - any js object' }, { name: 'any js object' }]
                }}
                loadItemsForMonth={(month) => { console.log('trigger items loading') }}
                onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
                onDayPress={(day) => { console.log('day pressed') }}
                // Callback that gets called when day changes while scrolling agenda list
                onDayChange={(day) => { console.log('day changed') }}
                renderItem={e => renderItem(e)}
                // Specify how each item should be rendered in agenda

                // Hide knob button. Default = false

                // By default, agenda dates are marked if they have at least one item, but you can override this if needed
                markedDates={{
                    '2021-08-16': { marked: true },
                    '2021-08-17': { marked: true },
                    '2021-08-18': { disabled: false, marked: true }
                }}
                // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
                disabledByDefault={true}
                // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
                onRefresh={onRefresh}
                // Set this true while waiting for new data from a refresh
                refreshing={true}
                // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
                refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing} />}
                // Agenda theme
                theme={{
                    agendaDayTextColor: 'yellow',
                    agendaDayNumColor: 'green',
                    agendaTodayColor: 'red',
                    agendaKnobColor: 'blue'
                }}
                // Agenda container style
                style={{}}
            />
        </View>

    )
}

const renderItem = (item) => {
    console.log(item)
    return (
        <TouchableOpacity>
            <Text>{item.name}</Text>
            <HelperText>
                <IonIcons name="time-outline" />
                {item.date_time}
            </HelperText>
        </TouchableOpacity>
    )
}