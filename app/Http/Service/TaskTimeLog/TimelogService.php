<?php

namespace App\Http\Service\TaskTimeLog;

class TimelogService
{
    public function calculateTotalHoursAndWeeks($timeString, $currentValues): array
    {
        // Split the time string into individual time components
        $timeComponents = explode(' ', $timeString);

        // Define an array to store the updated values
        $updatedValues = $currentValues;

        // Iterate through each time component and update the values
        foreach ($timeComponents as $component) {
            // Extract the numerical value and unit (hours or minutes)
            preg_match('/(\d+)([hm])/', $component, $matches);

            if (isset($matches[1]) && isset($matches[2])) {
                $value = (int)$matches[1];
                $unit = $matches[2];

                // Update the values based on the unit
                if ($unit === 'w') {
                    $updatedValues['weeks'] += $value;
                } elseif ($unit === 'd') {
                    $updatedValues['days'] += $value;
                } elseif ($unit === 'h') {
                    $updatedValues['hours'] += $value;
                } elseif ($unit === 'm') {
                    $updatedValues['minutes'] += $value;
                }
            }
        }

        // Adjust values (e.g., convert excess minutes to hours)
        $updatedValues['hours'] += floor($updatedValues['minutes'] / 60);
        $updatedValues['minutes'] = $updatedValues['minutes'] % 60;

        $updatedValues['days'] += floor($updatedValues['hours'] / 24);
        $updatedValues['hours'] = $updatedValues['hours'] % 24;

        $updatedValues['weeks'] += floor($updatedValues['days'] / 7);
        $updatedValues['days'] = $updatedValues['days'] % 7;

        // Return the updated values
        return $updatedValues;
    }
}
