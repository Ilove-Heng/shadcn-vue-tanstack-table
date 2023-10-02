<script setup lang="ts">
import { reactive, ref } from "vue";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



import { DialogClose } from "radix-vue";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const defaultValue = "item-1";

const accordionItems = [
  {
    value: "item-1",
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    value: "item-2",
    title: "Is it unstyled?",
    content:
      "Yes. It's unstyled by default, giving you freedom over the look and feel.",
  },
  {
    value: "item-3",
    title: "Can it be animated?",
    content: "Yes! You can use the transition prop to configure the animation.",
  },
];

function toggleDarkMode() {
  const body = document.querySelector("body");
  body?.classList.toggle("dark");
}

function changeTheme(theme: string): void {
  console.log("theme", theme);

  let root = document.querySelector(":root");
  const isDark = root?.classList.contains("dark");

  root!.className = "";
  if (isDark) root?.classList.add("dark");
  root?.classList.add(theme);
}

const countries = [
  { country: "Spain" },
  { country: "Cambodia" },
  { country: "Thai" },
  { country: "France" },
  { country: "Ghana" },
  { country: "Nigeria" },
  { country: "Brazil" },
  { country: "Ecuador" },
];

const selected = ref([]);
const formData = reactive({
  email: "",
})

</script>

<template>
  <div class="m-10 flex gap-10">
    <Button variant="default" @click="toggleDarkMode">
      Toggle dark mode
    </Button>
    <Button variant="default" @click="changeTheme('theme-green')"
      >Click me
    </Button>
    <Button variant="destructive" @click="changeTheme('theme-red')"
      >Click me</Button
    >
    <Button variant="secondary" @click="changeTheme('theme-blue')">
      Click me
    </Button>
  </div>
  <section class="mx-36">
    <Accordion
      type="single"
      class="w-full"
      collapsible
      :default-value="defaultValue"
    >
      <AccordionItem
        v-for="item in accordionItems"
        :key="item.value"
        :value="item.value"
      >
        <AccordionTrigger>{{ item.title }}</AccordionTrigger>
        <AccordionContent>
          {{ item.content }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>

  <section class="mx-36 my-10 flex gap-6">
    <Select>
      <SelectTrigger class="w-[180px]">
        <SelectValue placeholder="Select a countries" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Countries</SelectLabel>
          <div v-for="(country, idx) in countries" :key="idx">
            <SelectItem :value="country.country" v-model="selected">
              {{ country.country }}
            </SelectItem>
          </div>
        </SelectGroup>
      </SelectContent>
    </Select>

    <Dialog>
      <DialogTrigger as-child>
        <Button variant="outline"> Edit Profile </Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]" @escape-key-down.prevent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="name" class="text-right"> Name </Label>
            <Input id="name" value="Heng kon papa" class="col-span-3" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="username" class="text-right"> Username </Label>
            <Input id="username" value="@lulu" class="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button variant="outline"> Cancel </Button>
          </DialogClose>
          <Button type="submit"> Save changes </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="ghost">Are You Sure ?</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

    <form action="#">
      <Input 
      type="email" 
      placeholder="Email" 
      v-model="formData.email"
      />
      <br>
      Email: {{ formData.email }}
    </form>

    
    <!-- <pre>{{ selected }}</pre> -->
  </section>

  <section class="mx-36 my-10">

    <Tabs default-value="account" class="w-[400px]">
      <TabsList class="grid w-full grid-cols-2">
        <TabsTrigger value="account"> Account </TabsTrigger>
        <TabsTrigger value="password"> Password </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <div class="space-y-1">
              <Label for="name">Name</Label>
              <Input id="name" default-value="Pedro Duarte" />
            </div>
            <div class="space-y-1">
              <Label for="username">Username</Label>
              <Input id="username" default-value="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <div class="space-y-1">
              <Label for="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div class="space-y-1">
              <Label for="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>

    

  </section>


  
</template>
