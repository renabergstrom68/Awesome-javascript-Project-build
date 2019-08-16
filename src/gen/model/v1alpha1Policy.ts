/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* Policy defines the configuration of how audit events are logged
*/
export class V1alpha1Policy {
    /**
    * The Level that all requests are recorded at. available options: None, Metadata, Request, RequestResponse required
    */
    'level': string;
    /**
    * Stages is a list of stages for which events are created.
    */
    'stages'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "level",
            "baseName": "level",
            "type": "string"
        },
        {
            "name": "stages",
            "baseName": "stages",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1Policy.attributeTypeMap;
    }
}

