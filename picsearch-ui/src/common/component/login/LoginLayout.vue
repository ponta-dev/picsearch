<template>
    <v-container fluid>
        <v-row>
            <v-col cols="6">

            </v-col>
            <v-col cols="6">
                <v-card>
                    <v-card-title>
                        ログインフォーム
                    </v-card-title>
                    <v-card-item>
                        <v-row>
                            <v-col>
                                <v-text-field
                                    v-model="state.userId"
                                    label="user id"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field
                                    v-model="state.userPassword"
                                    label="user password"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                {{state.userId}}, {{ state.userPassword }}
                            </v-col>
                        </v-row>
                    </v-card-item>
                    <v-card-actions>
                        <v-btn variant="outlined">
                            ログイン
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import {reactive} from 'vue'

const state = reactive({
    userId: "",
    userPassword: "",
})

</script>
