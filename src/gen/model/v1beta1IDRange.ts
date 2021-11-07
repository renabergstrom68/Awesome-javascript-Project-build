/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* IDRange provides a min/max of an allowed range of IDs.
*/
export class V1beta1IDRange {
    /**
    * max is the end of the range, inclusive.
    */
    'max': number;
    /**
    * min is the start of the range, inclusive.
    */
    'min': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "max",
            "baseName": "max",
            "type": "number"
        },
        {
            "name": "min",
            "baseName": "min",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1IDRange.attributeTypeMap;
    }
}

